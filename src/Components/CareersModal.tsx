import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReactComponent as Mail } from './images/Mail.svg';
import { ReactComponent as Fi_Upload } from './images/Fi_Upload.svg';
import emailjs from 'emailjs-com';

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '85%', sm: '75%', md: '55%' },
  maxWidth: 700,
  minWidth: 320,
  height: 'auto',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  borderRadius: '12px',
  boxShadow: 24,
  p: { xs: 2, sm: 4 },
  display: 'flex',
  flexDirection: 'column',
};

const closeButtonStyle = {
  position: 'absolute' as 'absolute',
  top: '-5px',
  right: '-5px',
  backgroundColor: '#F5C10A',
  color: 'white',
  zIndex: 10,
  '&:hover': {
    backgroundColor: '#dca309',
  },
};

const submitButtonStyle = {
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '8px',
  padding: '10px 20px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#333',
  },
  width: 'fit-content',
};
const dropzoneStyle = {
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px dashed #ccc',
  borderRadius: '8px',
  padding: '15px',
  cursor: 'pointer',
  marginTop: '2px',
  textAlign: 'center',
};

interface CareersModalProps {
  open: boolean;
  onClose: () => void;
  isContactUs?: boolean;
}

const FileUploadSection: React.FC<{
  onFileChange: (file: File) => void;
  fileName: string;
  onRemove: () => void;
}> = ({ onFileChange, fileName, onRemove }) => {
  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileChange(acceptedFiles[0]);
    } else {
      alert('File type not supported. Please upload a PDF, DOCX, XLSX, or CSV file.');
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': [],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [], // DOCX
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [], // XLSX
      'text/csv': [],
    },
  });

  return (
    <Box {...getRootProps()} sx={dropzoneStyle}>
      <input {...getInputProps()} />
      <Fi_Upload width="48" height="38" />
      <Typography variant="body2" color="textSecondary">
        Drag & drop your file here, or click to choose (PDF, DOCX, XLSX, CSV)
      </Typography>
      {fileName && (
        <Box display="flex" alignItems="center" justifyContent="center" sx={{ width: '100%', mt: 1 }}>
          <Typography variant="body2" color="textPrimary" sx={{ textAlign: 'center', marginRight: 1 }}>
            Uploaded file: {fileName}
          </Typography>
          <IconButton onClick={onRemove} size="small">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

const CareersModal: React.FC<CareersModalProps> = ({ open, onClose, isContactUs }) => {
  const [file, setFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState<string | null>(null); // separate state for base64
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Convert file to base64 format
  const convertFileToBase64 = (file: File) => {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (selectedFile: File) => {
    try {
      const base64File = await convertFileToBase64(selectedFile);
      setFile(selectedFile);
      setFileBase64(base64File as string); // set base64 as a string
    } catch (error) {
      console.error('File conversion error:', error);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);
  
    if (file) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
  
      reader.onloadend = async () => {
        // Check if reader.result is a string before using `split`
        if (typeof reader.result === 'string') {
          // const base64File = reader.result.split(',')[1]; // Base64 file content
          // formData.append('file', base64File);
          // formData.append('fileName', file.name);
          // formData.append('fileType', file.type);
  
          try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzpmIfPSW-XiS2bJ24K_m6_0nSur42EtuzEzi8BnMLX0vTPrN6WdMIz-NR9-S0z_H64Cw/exec', {
              method: 'POST',             
              body: formData,
            });
  
            const result = await response.json();
            if (result.success) {
              alert('File uploaded successfully!');
            } else {
              alert('Failed to upload the file.');
            }
          } catch (error) {
            console.error('Error:', error);
          }
        } else {
          alert('Failed to read the file. Please try again.');
        }
      };
  
      reader.onerror = () => {
        alert('There was an error reading the file.');
      };
    } else {
      alert('No file selected.');
    }
  };
  
  
  
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="careers-modal-title" aria-describedby="careers-modal-description">
      <Box sx={modalStyle}>
        <IconButton onClick={onClose} sx={closeButtonStyle}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" component="h1">
          {isContactUs ? 'Contact Us' : 'Careers'}
        </Typography>
        <Box sx={{ width: '100%', mb: 1 }}>
          <Mail width="100%" height="80px" />
        </Box>
        <Typography variant="body1" gutterBottom>
          Name <span style={{ color: 'red' }}>*</span>
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 1 }}
          required
        />
        <Box display="flex" gap={2} sx={{ mb: 1 }}>
          <Box flex={1}>
            <Typography variant="body1" gutterBottom>
              Email <span style={{ color: 'red' }}>*</span>
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Box>
          <Box flex={1}>
            <Typography variant="body1" gutterBottom>
              Phone
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
        </Box>
        {!isContactUs && (
          <>
            <Typography variant="body1" sx={{ mt: 1 }} gutterBottom>
              Upload Resume <span style={{ color: 'red' }}>*</span>
            </Typography>
            <FileUploadSection
              onFileChange={handleFileChange}
              fileName={file ? file.name : ''}
              onRemove={() => { setFile(null); setFileBase64(null); }}
            />
          </>
        )}
        <Typography variant="body1" sx={{ mt: 1 }} gutterBottom>
          Message
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          placeholder="Write your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button onClick={handleSubmit} sx={submitButtonStyle}>
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default CareersModal;
