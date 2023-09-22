import { Box, Image } from 'theme-ui';
function MemberListing(props) {
    function getTeamMemberImage(name) {
        const nameToImage = {
            "Daniel A": "team/daniel a.png",
            "Max Xiong": "team/max xiong.jpeg",
            "Jason Xu": "team/jason xu.jpg",
            "Agni": "team/agni.jpg",
            "Karunya Agarwal": "team/karunya agarwal.jpg"
        }

        if (name in nameToImage) return nameToImage[name];
        return defaultImage;
    }

    return (
        <Box sx={{width: props.width}}>
            <Image sx={styles.fitImage} src={getTeamMemberImage(props.name)} />
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

