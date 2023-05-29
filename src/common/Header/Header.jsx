import { Badge } from 'primereact/badge';
        

export const Header = (props) =>{
    return (
        <>
        <div>
        <img
          src={props.img}
          alt="checklist"
          height="300px"
          width="100%"
        />
    <div className='header_title text-center'>
    <Badge className='text-center border-noround pl-4 pr-4' value={props.badgeValue}></Badge>
        <h1 className="text-white text-center">
          {props.title}
        </h1>
    </div>
        
      </div>
        </>
    )
}