import React, { useState } from "react";

const AdminAccountSettingsTab = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    phone: "123-456-7890",
    role: "Super Admin",
    department: "Management",
    address: "123 Admin Street, City, Country",
    username: "admin123",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Preview image
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.profileHeader}>
          <div style={styles.profileImageWrapper}>
            <label htmlFor="upload-profile" style={styles.uploadLabel}>
              {profilePic ? (
                <img
                  src={profilePic}
                  alt="Profile Preview"
                  style={styles.profileImage}
                />
              ) : (
                <div style={styles.placeholder}>Upload</div>
              )}
            </label>
            <input
              id="upload-profile"
              type="file"
              accept="image/*"
              style={styles.fileInput}
              onChange={handleProfilePicChange}
            />
          </div>
          <div style={styles.headerDetails}>
            <h2 style={styles.name}>{formData.name}</h2>
            <p style={styles.role}>{formData.role}</p>
            <p style={styles.department}>{formData.department}</p>
            <p style={styles.email}>{formData.email}</p>
          </div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.detailsSection}>
          <h3 style={styles.sectionTitle}>Profile Details</h3>
          {!isEditing ? (
            <div style={styles.detailsView}>
              <p>
                <strong>Phone:</strong> {formData.phone}
              </p>
              <p>
                <strong>Address:</strong> {formData.address}
              </p>
              <p>
                <strong>Username:</strong> {formData.username}
              </p>
              <button
                style={styles.editButton}
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </div>
          ) : (
            <form style={styles.form}>
              <div style={styles.formRow}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  style={styles.input}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  placeholder="Role"
                  style={styles.input}
                  onChange={handleInputChange}
                />
              </div>
              <div style={styles.formRow}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  style={styles.input}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder="Phone"
                  style={styles.input}
                  onChange={handleInputChange}
                />
              </div>
              <div style={styles.formRow}>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  placeholder="Department"
                  style={styles.input}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  placeholder="Address"
                  style={styles.input}
                  onChange={handleInputChange}
                />
              </div>
              <div style={styles.formRow}>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  placeholder="Username"
                  style={styles.input}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  placeholder="New Password"
                  style={styles.input}
                  onChange={handleInputChange}
                />
              </div>
              <div style={styles.buttonGroup}>
                <button
                  type="button"
                  style={styles.saveButton}
                  onClick={() => setIsEditing(false)}
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  style={styles.cancelButton}
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  card: {
    backgroundColor: "#1F2A40",
    borderRadius: "8px",
    padding: "20px",
    color: "#EBF3EC",
    maxWidth: "800px",
    margin: "0 auto",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
  },
  profileHeader: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  profileImageWrapper: {
    position: "relative",
  },
  uploadLabel: {
    cursor: "pointer",
  },
  placeholder: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "#EBF3EC",
    color: "#323232",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  fileInput: {
    display: "none",
  },
  headerDetails: {
    flex: 1,
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  role: {
    fontSize: "16px",
    color: "#A9B8C6",
  },
  department: {
    fontSize: "14px",
    color: "#A9B8C6",
  },
  email: {
    fontSize: "14px",
    color: "#A9B8C6",
  },
  divider: {
    borderTop: "1px solid #A9B8C6",
    margin: "20px 0",
  },
  detailsSection: {
    padding: "10px 0",
  },
  sectionTitle: {
    fontSize: "18px",
    marginBottom: "10px",
  },
  detailsView: {
    fontSize: "14px",
    lineHeight: "1.6",
  },
  editButton: {
    backgroundColor: "#EBF3EC",
    color: "#1F2A40",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  formRow: {
    display: "flex",
    gap: "10px",    
  },
  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    color: "#1F2A40"
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  saveButton: {
    backgroundColor: "#EBF3EC",
    color: "#1F2A40",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#D9534F",
    color: "#1F2A40",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AdminAccountSettingsTab;
