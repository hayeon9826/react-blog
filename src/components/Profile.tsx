import { app } from "firebaseApp";
import { toast } from "react-toastify";
import { getAuth, signOut } from "firebase/auth";

export default function Profile() {
  return (
    <div className="Profile__box">
      <div className="Flex__box-lg">
        <div className="Profile__image" />
        <div>
          <div className="Profile__email">testname@test.com</div>
          <div className="Profile__name">김아무개</div>
        </div>
      </div>
      <div
        role="presentation"
        className="Profile__logout"
        onClick={async () => {
          const auth = getAuth(app);
          await signOut(auth);
          console.log(auth);
          toast.success("로그아웃 되었습니다.");
        }}
      >
        로그아웃
      </div>
    </div>
  );
}
