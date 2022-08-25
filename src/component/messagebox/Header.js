const Header = ({openChat}) => {
    return (
        <div className="d-flex flex-row justify-content-between p-3 adiv text-white" onClick={openChat}>
            
            <i className="fas fa-chevron-left"></i>
            <span className="pb-3">Chat</span>
            <i className="fas fa-times"></i>
        </div>
    )
}


export default Header