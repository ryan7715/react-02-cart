import {useState} from "react";

function App() {
    const [name, setName] = useState("");    // input 관리용
    const [cart, setCart] = useState([]);    // 목록 관리용

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === "" || name === " ") {
            return;
        }
        setCart([...cart, {name: name, quantity: 1}]);
        setName("");

    }

    const handleChange = (e) => {
        setName(e.target.value)
    }






    return (
        <>
            <h2>Simple Shop</h2>
            <fieldset>
                <legend>상품 추가</legend>
                <form onSubmit={handleSubmit
                }>
                    <input placeholder={"상품명을 입력하세요"}
                           value={name}
                           onChange={handleChange}/>
                    <button type={"submit"}>카트 담기</button>
                </form>
            </fieldset>
            <table border={1}
                   cellPadding={10}
                   style={{
                       width: "100%",
                       borderCollapse: "collapse"
                   }}>
                <thead style={{backgroundColor: "#f2f2f2"}}>
                <tr>
                    <td>상품명</td>
                    <td>수량제어</td>
                    <td>관리</td>
                </tr>
                </thead>
                <tbody>
                {cart.map((item, index) => <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                        <button onClick={() => {
                            if (item.quantity <= 1) {
                                return;
                            }
                            const newCart = [...cart]
                            newCart[index].quantity -= 1;
                            setCart(newCart);
                        }}>-
                        </button>
                        {item.quantity}
                        <button onClick={() => {
                            const newCart = [...cart]
                            newCart[index].quantity += 1;
                            setCart(newCart);
                        }}>+
                        </button>
                    </td>
                    <td>
                        <button onClick={() => {
                            const result = cart.filter((v, i) => {
                                return i !== index
                            });
                            setCart(result);
                        }}>삭제
                        </button>
                    </td>
                </tr>)}
                </tbody>
            </table>
            <h3>총 품목: {cart.length}개 / 총 수량: {cart.reduce((sum, item) => {
                return item.quantity + sum
            }, 0)}개</h3>
        </>

    );
}



export default App;