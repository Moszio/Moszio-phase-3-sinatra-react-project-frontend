function Previous() {
  return (
    <div className='container-fluid'>
      <div>
        <div className='card-body'>
          <div className='row m-0 pt-5'>
            <h1
              className='text-center w-75 m-auto'
              style={{ letterSpacing: '.1rem' }}
            >
              Past Performance
            </h1>
            <div className='card col-12 col-md-4' style={{ border: 'none' }}>
              <img
                src='https://www.benbeiers.com/post/stock-sundays-111520/featured.png'
                alt='fedex'
              />
            </div>
            <div className='card col-12 col-md-4' style={{ border: 'none' }}>
              <img
                src='https://cdn.leggett.com/leggett/meta-image_1500x786_cm.jpg'
                alt='leggett & co'
              />
            </div>
            <div className='card col-12 col-md-4' style={{ border: 'none' }}>
              <img
                src='https://www.chrobinson.com/en-US/newsroom/-/media/global-newsroom/Logos/CHR/Full-Color/CHRobinson_800x270_update.jpg?h=272&w=500&la=en-US&hash=04EFC9A9A172872643219623C8D3C366'
                alt=''
              />
            </div>
            {/* <div className='card col-12 col-md-3' style={{ border: 'none' }}>
              <img
                src='https://cdn.leggett.com/leggett/meta-image_1500x786_cm.jpg'
                alt=''
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Previous
