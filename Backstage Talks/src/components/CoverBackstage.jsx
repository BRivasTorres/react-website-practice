import booksCoverData from "../mocks/BooksCoverData"

const CoverBackstage = () => {
  return (
    <div>
        {booksCoverData.map((book, id) => {
            return(
                <div key={id}>
                    <img src={book.imgSrc} alt="" />
                    <h2>{book.issue}</h2>
                    {book.buy && 
                        book.buy.map((subItem, idx) => {
                        return(
                            <aside key={idx}>
                                <a href="#">Where to buy {subItem}</a>
                            </aside>
                        )})
                    }
                    <p>{book.whereToBuy} <a href="#">selected stores</a></p>
                </div>
            )
        })}
    </div>
  )
}

export default CoverBackstage
