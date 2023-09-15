import { Box, Image } from 'theme-ui';
function MemberListing(props) {
    return (
        <Box sx={{width: props.width}}>
            <Image sx={styles.fitImage} src={defaultImage} />
            <h2>{props.name}</h2>
        </Box>
    )
}

export default MemberListing;

const defaultImage = "http://successcreeations.com/wp-content/uploads/2009/04/gravatar.jpg";
const styles = {
    fitImage: {
        maxWidth: "60%"
    }
}