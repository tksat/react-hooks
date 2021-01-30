import styled from 'styled-components';

const TodoApp = () => {
  return (
    <StyledDiv>
      <StyledH4>イベント作成フォーム</StyledH4>
      <form>
        <div>
          <lavel>タイトル</lavel>
          <StyledInputText />
        </div>
        <div>
          <lavel>本文</lavel>
          <StyledTextArea />
        </div>
        <StyledButton value="イベントを作成" />
        <StyledButton value="すべてのイベントを削除" delete />
      </form>

      <StyledH4>イベント一覧</StyledH4>
      <table>
        <thead>
          <tr>
            <th>タイトル</th>
            <th>日付</th>
            <th>内容</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ここにタイトル入ります</td>
            <td>0000/00/00</td>
            <td>ここに内容のテキストが入りますここに内容のテキストが入ります</td>
          </tr>
        </tbody>
      </table>

    </StyledDiv>
  )
}

export default TodoApp;

//style

const StyledDiv = styled.div`
  width: 900px;
  max-width: 900px;
  margin: 0 auto;
`

const StyledH4 = styled.h4`
  font-size: 20px;
`
const StyledInputText = styled.input.attrs(props => ({
  type: "text"
}))`
  border: 2px solid #ccc;
`

const StyledButton = styled.input.attrs(props => ({
  type: 'button'
}))`
  background: ${props => props.delete ? "red" : "blue"};
  color: #fff;
`

const StyledTextArea = styled.textarea`
  width: 100%;
`
