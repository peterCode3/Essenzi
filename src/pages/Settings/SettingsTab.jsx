import React, { useState, useRef } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { CgSpaceBetween } from "react-icons/cg";

const SettingsTab = () => {
  const [logo, setLogo] = useState(null);
  const [favicon, setFavicon] = useState(null);
  const [cropData, setCropData] = useState(null);
  const [showCropper, setShowCropper] = useState(false);
  const [cropTarget, setCropTarget] = useState(null);
  const cropperRef = useRef(null);

  const handleFileUpload = (e, setTarget) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCropTarget(() => setTarget); // Store the setter function
        setCropData(reader.result); // Load image into Cropper
        setShowCropper(true); // Show cropper modal
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCrop = () => {
    const cropper = cropperRef.current.cropper;
    const croppedImage = cropper.getCroppedCanvas().toDataURL(); // Get cropped image
    if (cropTarget) {
      cropTarget(croppedImage); // Set the cropped image using the setter function
    }
    setShowCropper(false); // Hide cropper
  };
  
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>General Settings</h2>

      <div style={styles.formGroup}>
        <label style={styles.label}>Upload Logo:</label>
        <div style={styles.inputWrapper}>
          <label htmlFor="upload-logo" style={styles.circleWrapper}>
            {logo ? (
              <img src={logo} alt="Logo Preview" style={styles.circleImage} />
            ) : (
              <div style={styles.placeholder}>Logo</div>
            )}
          </label>
          <input
            id="upload-logo"
            type="file"
            accept="image/*"
            style={styles.fileInput}
            onChange={(e) => handleFileUpload(e, setLogo)}
          />
        </div>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Upload Favicon:</label>
        <div style={styles.inputWrapper}>
          <label htmlFor="upload-favicon" style={styles.circleWrapper}>
            {favicon ? (
              <img src={favicon} alt="Favicon Preview" style={styles.circleImage} />
            ) : (
              <div style={styles.placeholder}>Favicon</div>
            )}
          </label>
          <input
            id="upload-favicon"
            type="file"
            accept="image/*"
            style={styles.fileInput}
            onChange={(e) => handleFileUpload(e, setFavicon)}
          />
        </div>
      </div>

      <div style={styles.formGroup}>
        <label style={styles.label}>Theme Color:</label>
        <input type="color" style={styles.colorPicker} />
      </div>

      {/* Cropper Modal */}
      {showCropper && (
        <div style={styles.cropperModal}>
          <Cropper
            src={cropData}
            style={{ height: 300, width: "100%" }}
            aspectRatio={1}
            guides={true}
            ref={cropperRef}
          />
          <div style={styles.cropperButtons}>
            <button style={styles.cropButton} onClick={handleCrop}>
              Confirm
            </button>
            <button
              style={styles.cancelButton}
              onClick={() => setShowCropper(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f4f7fc",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    display: "block",
    fontSize: "16px",
    color: "#555",
    marginBottom: "8px",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",

  },
  fileInput: {
    display: "none",
  },
  circleWrapper: {
    cursor: "pointer",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#e0e0e0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  circleImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  placeholder: {
    color: "#555",
    fontSize: "14px",
  },
  colorPicker: {
    width: "50px",
    height: "30px",
    border: "none",
    cursor: "pointer",
  },
  cropperModal: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    borderRadius: "8px",
  },
  cropperButtons: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
  cropButton: {
    padding: "10px 20px",
    backgroundColor: "#1F2A40",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  cancelButton: {
    padding: "10px 20px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default SettingsTab;
