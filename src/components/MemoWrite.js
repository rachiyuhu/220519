import { useState } from "react";

const MemoWrite = () => {
    const [memos, setMemo] = useState([
        
        //예시
        {id:1, memo:"메모1"},
        {id:2, memo:"메모2"},
    ]);


    const [inputText, setInputText] = useState("");

    const [inputId, setInputId] = useState(3);


    const deletemMemo = (id) => {
        const newMemo = memos.filter((m) => m.id !== id);
        setMemo(newMemo);
    };


    const changeText = (e) => {
        setInputText(e.target.value);
    };

    const getText = () => {
        //여기서도 클래스형처럼 concat 사용하여 아이디+메모의 리스트 추가해주기
        const newMemo = memos.concat({
            id:inputId,
            memo:inputText,
        });
        setMemo(newMemo);
        setInputId(inputId+1);
    };



    return ( 
    <div>
        <h1>메모</h1>
        <input 
            type="text" 
            name="inputText" 
            onChange={changeText}>
        </input>

        <button 
            onClick={getText}>
                추가
        </button>
        
        <ul>
            {memos.map((m)=>(
                <li //여기 메모 출력
                key={m.id}>
                    {m.memo}
                    
                <button // X 버튼
                    key={m.id}
                    onClick={()=>{
                        deletemMemo(m.id);
                    }}
                    >X  
                </button>
            </li>
        ))}
        </ul>
        </div>
    );
};


    export default MemoWrite;