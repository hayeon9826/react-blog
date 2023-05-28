import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <>
      <form action="/login" method="POST" className="Form Form--lg">
        <h1 className="Form__title">로그인</h1>
        <div className="Form__block">
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" id="email" required />
        </div>
        <div className="Form__block">
          <label htmlFor="password">비밀번호</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="Form__block">
          계정이 없으신가요?
          <Link className="Form__link" to="/signup">
            회원가입하기
          </Link>
        </div>
        <div className="Form__block--lg">
          <input type="submit" value="로그인" className="Form__btn-submit" />
        </div>
      </form>
    </>
  );
}
