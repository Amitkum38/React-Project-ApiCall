import RightSideBarHeader from './RightSideBarTopHead';
import RightSideBarTable from './RightTable'

function rightSideBar(){
    return(
        <div className="d-flex flex-column flex-row-fluid wrapper">
            <RightSideBarHeader/>
            <RightSideBarTable/>
    </div>
    )
}

export default rightSideBar;