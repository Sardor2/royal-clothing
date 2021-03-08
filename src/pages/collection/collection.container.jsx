import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import  CollectionPage from "./collection.component";


const mapStateToProps = state => ({
    isLoading: !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer