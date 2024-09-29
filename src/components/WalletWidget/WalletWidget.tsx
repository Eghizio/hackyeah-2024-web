import s from "./WalletWidget.module.css";
import { FaPlus } from "react-icons/fa";
import { HiArrowsUpDown } from "react-icons/hi2";
import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { useWalletQuery } from "../../api/queries/payment";
// import { Spinner } from "../Spinner/Spinner";

interface Props {}

const toCurrency = (amount: number) => amount.toFixed(2) + " PLN";

export const WalletWidget = ({}: Props) => {
  // const { user } = useAuth();
  // @ts-ignore
  // const { data, isLoading, isError } = useWalletQuery(user._id);
  const navigate = useNavigate();

  // if (isLoading) return <Spinner />;
  // if (isError) return "Error :c";

  // const balance = data ?? 1337.99;
  const balance = 1337.99;
  const formattedBalance = toCurrency(balance);

  return (
    <article className={s["widget"]}>
      <p className={s["balance"]}>{formattedBalance}</p>
      <div className={s["buttons"]}>
        <button className={s["btn"]} onClick={() => navigate("/wallet/top-up")}>
          <FaPlus size={44} />
        </button>
        <button
          className={s["btn"]}
          onClick={() => navigate("/wallet/withdraw")}
        >
          <HiArrowsUpDown size={44} />
        </button>
        <button
          className={s["btn"]}
          onClick={() => navigate("/wallet/transactions")}
        >
          <BsList size={44} />
        </button>
      </div>
    </article>
  );
};
