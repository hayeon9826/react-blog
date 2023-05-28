import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <form action="/login" method="POST" className="Form Form--lg">
      <h1 className="Form__title">회원가입</h1>
      <div className="Form__block">
        <label htmlFor="email">이메일</label>
        <input type="text" name="email" id="email" required />
      </div>
      <div className="Form__block">
        <label htmlFor="password">비밀번호</label>
        <input type="password" name="password" id="password" required />
      </div>
      <div className="Form__block">
        <label htmlFor="password_confirmation">비밀번호 확인</label>
        <input type="password" name="password_confirmation" id="password_confirmation" required />
      </div>
      <div className="Form__block">
        계정이 있으신가요?
        <Link className="Form__link" to="/login">
          로그인하기
        </Link>
      </div>
      <div className="Form__block--lg">
        <input type="submit" value="로그인" className="Form__btn-submit" />
      </div>
    </form>
  );
}
