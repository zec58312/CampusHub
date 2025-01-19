import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

const AdminLogin = () => {
  const [adminCode, setAdminCode] = useState("");
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const { uid } = authUser || {};

  // Predodređeni admin kod
  const predefinedAdminCode = "12345";

  const handleSubmit = (e) => {
    e.preventDefault();
    const toastId = toast.loading('Pending');

    // Provjera da li uneseni kod odgovara predodređenom kodu
    if (adminCode === predefinedAdminCode) {
      toast.success("Verification successful!", { id: toastId });
      navigate("/AdminPanel");
    } else {
      toast.error("Invalid admin code, try again!", { id: toastId });
    }

    setAdminCode("");
  };

  return (
    <div className="admin-login">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter the 5-digit admin code:</label>
        <input
          required
          value={adminCode}
          pattern="[0-9]{5}"
          minLength={5}
          maxLength={5}
          onChange={(e) => setAdminCode(e.target.value)}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminLogin;
