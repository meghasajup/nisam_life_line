import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { axiosInstance } from "../../config/axiosInstance";

export const AdminAuth = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await axiosInstance.get("/admin/check", {
          withCredentials: true,
        });
        setUser(response.data.user); // backend sends { user: decoded }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          src="https://i.gifer.com/PRE4.gif"
          alt="Loading..."
          className="w-32 h-32"
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
