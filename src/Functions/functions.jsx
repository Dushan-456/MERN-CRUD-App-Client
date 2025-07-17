import API from "../assets/api";

export    const fetchUsers = async (setUsers,setLoading) => {
      try {
         const res = await API.get("/user/all-users");
         setUsers(res.data.data);
      } catch (error) {
         console.error("Error fetching users:", error);
      } finally {
         setLoading(false);
      }
   };

//============================================================================================


   export    const fetchUserProfile = async (id,setUser,setLoading) => {
         try {
            const res = await API.get(`/user/${id}`);
            setUser(res.data.data);
         } catch (error) {
            console.error("Error fetching userr Details:", error);
         } finally {
            setLoading(false);
         }
      };


//============================================================================================

