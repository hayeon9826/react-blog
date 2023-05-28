export default function PostForm() {
  return (
    <form action="/posts" method="POST" className="Form">
      <div className="Form__block">
        <label htmlFor="title">제목</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div className="Form__block">
        <label htmlFor="summary">요약</label>
        <input type="text" name="summary" id="summary" required />
      </div>
      <div className="Form__block">
        <label htmlFor="content">내용</label>
        <textarea name="content" id="content" required />
      </div>
      <div className="Form__block">
        <input type="submit" value="제출" className="Form__btn-submit" />
      </div>
    </form>
  );
}
