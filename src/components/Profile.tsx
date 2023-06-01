import { app } from "firebaseApp";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import AuthContext from "context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="Profile__box">
      <div className="Flex__box-lg">
        <div className="Profile__image" />
        <div>
          <div className="Profile__email">{user?.email}</div>
          <div className="Profile__name">반갑습니다 {user?.displayName || "사용자"}님!</div>
        </div>
      </div>
      <div
        role="presentation"
        className="Profile__logout"
        onClick={async () => {
          const auth = getAuth(app);
          await signOut(auth);
          toast.success("로그아웃 되었습니다.");
        }}
      >
        로그아웃
      </div>
    </div>
  );
}
