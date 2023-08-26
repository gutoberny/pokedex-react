/* eslint-disable react/prop-types */
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Pagination = (props) => {
    const { page, totalPages, previousPage, nextPage } = props;
    return (
        <div className="pagination-container">
            <button onClick={previousPage}>
                <div>
                    <GrFormPrevious />
                </div>
            </button>
            <div>
                {page} de {totalPages}
            </div>
            <button onClick={nextPage}>
                <div>
                    <GrFormNext />
                </div>
            </button>
        </div>
    );
};

export default Pagination;
