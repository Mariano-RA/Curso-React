import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);

  const { data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <hr />
      <h1>BreakingBad Quotes</h1>

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <button className="btn btn-primary ms-3" onClick={() => increment(1)}>
        Next Quote
      </button>

      {counter !== 1 ? (
        <button className="btn btn-primary ms-3" onClick={() => decrement(1)}>
          Previous Quote
        </button>
      ) : (
        <button
          className="btn btn-primary ms-3 d-none"
          onClick={() => decrement(1)}
        >
          Previous Quote
        </button>
      )}
    </div>
  );
};
