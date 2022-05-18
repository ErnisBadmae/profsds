import { Link } from 'react-router-dom';
import './breadCrumbs.scss';

export const BreadCrumbs = (props) => {
    const handleRegistry = (registry) => {
        switch (registry) {
            case 'sds':
                return (
                    <Link
                        className="bread-crumbs-link"
                        to={'/standard-certifications/list'}
                    >
                        Реестр СДС
                    </Link>
                );
            case 'os':
                return (
                    <Link
                        className="bread-crumbs-link"
                        to={'/organ-certifications/list'}
                    >
                        Реестр ОС
                    </Link>
                );

            default:
        }
    };
    return (
        <div className="bread-crumbs">
            {handleRegistry(props.registry)}
            {props.children}
        </div>
    );
};
