import React from "react";
import { useNavigate} from "react-router-dom";
import swal from "@sweetalert/with-react";
const Buscador = () => {

  const navigate = useNavigate();
  const buscador1 = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      swal(<h5>debe escribir algo</h5>);
    } else if (keyword.length < 4) {
      swal(<h5>debe escribir por lo menos 4 letras</h5>);
    } else if (keyword.length >= 4) {
      e.currentTarget.keyword.value = "";
      navigate(`./resultados?keyword=${keyword}`);
    }
  };

  return (
    <>
<div className="section">
<p className="Slogan">your movies, our passion</p>
      <form className="search-form "onSubmit={buscador1}>
        <label>
          <input
          className="search-icon"
            type="text"
            name="keyword"
            placeholder="search for a movie... "
          />
        </label>

        <button className="btn btn-info search-button" type="submit"> <span class="material-symbols-outlined">
search
</span>
</button>
      </form>
</div>
    </>
  );
};

export default Buscador;
