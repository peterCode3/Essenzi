import React, { useState } from "react";

const MyAccount = () => {
  const [profilePic, setProfilePic] = useState(null); // Profile picture state
  const [name, setName] = useState("Admin Name");
  const [email, setEmail] = useState("admin@example.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [password, setPassword] = useState("");

  // Handle profile picture upload
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Profile Section */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex-shrink-0">
            <img
              src={profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <input
              type="file"
              onChange={handleProfilePicChange}
              className="mt-2"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">{email}</p>
            <p className="text-sm text-gray-500">{phone}</p>
          </div>
        </div>

        {/* Account Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Account Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Password and Security */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Account Settings */}
        <div className="mt-8 flex justify-end space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">Save Changes</button>
          <button className="bg-gray-400 text-white px-6 py-2 rounded-lg">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;