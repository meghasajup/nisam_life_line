import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";

export const AdminAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      setTimeout(async () => {
        try {
          const response = await axiosInstance.get("admin/check-admin", {
            withCredentials: true,
          })
          console.log(response.data);



          setUser(response.data);
        } catch (error) {
          console.error("Error checking user:", error);
          setUser(null);
          navigate("/login");
        } finally {
          setLoading(false); 
        }
      }, 1000); 
    };

    checkAdmin();
  }, [navigate]);

  console.log("auth", user);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <img
          src="https://i.gifer.com/PRE4.gif"
          alt="Loading..."
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    );
  }

  return user ? children : <div>Admin not authenticated</div>;
};
