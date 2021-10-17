import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

// renderDish(dish) {
//     if (dish != null) {
//         return (
//             <>
//                 <div className="col-12 col-md-5 m-1">
//                     <Card >
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardBody>
//                             <CardTitle>{dish.name}</CardTitle>
//                             <CardText>{dish.description}</CardText>
//                         </CardBody>
//                     </Card>
//                 </div>
//                 <div className="col-12 col-md-5 m-1">
//                     <ul className="list-unstyled">
//                         {dish.comments.map(c => {
//                             return <li>
//                                 <p>{c.comment}</p>
//                                 <p>-- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(c.date))}</p>
//                             </li>
//                         })}
//                     </ul>

//                 </div>
//             </>
//         );
//     } else {
//         return (
//             <div></div>
//         );
//     }
// }

function RenderMenuItem({ dish, onClick }) {
    return (
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle heading>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}


export default Menu;