import { Link } from "react-router-dom";

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
      <Link to="/" className="Profile__logout">
        로그아웃
      </Link>
    </div>
  );
}
