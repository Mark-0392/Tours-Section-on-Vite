import Tour from './Tour'

const Tours = ({ tourslist, removeSingleTour }) => {
  //   console.log(tourslist)
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tourslist.map((singletour) => {
          return (
            <Tour
              key={singletour.id}
              {...singletour}
              removeSingleTour={removeSingleTour}
            />
          )
        })}
      </div>
    </section>
  )
}
export default Tours
