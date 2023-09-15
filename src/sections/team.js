import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import MemberListing from "../components/memberListing"; 

function Team() {
    return(
        <Box sx={styles.center}> 
          <Box> 
              <h1>Founders</h1>
              <Box sx={styles.founders}>
                <MemberListing width={oneThird} name="Daniel A" />
                <MemberListing width={oneThird} name="Max" />
                <MemberListing width={oneThird} name="Jason" />
                <MemberListing width={oneThird} name="Agni" />
                <MemberListing width={oneThird} name="Daniel" />
              </Box>

              <Box sx={styles.teamMembers}>
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
                <MemberListing width={oneTenth} name="Name" />
              </Box>


          </Box>
        </Box>
    )
}

export default Team;
const styles = {
    center: {
        "margin": "auto",
        "textAlign": "center"
    }, 

    founders: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "60%",
        margin: "auto"
    },

    teamMembers: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "80%",
        margin: "auto"
    }
}

const oneThird = "33.33%";
const oneTenth = "10%";