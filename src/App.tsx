import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Button,ButtonGroup, Link, List, ListItem, Typography } from '@mui/material'

function App() {
  return (
    <div >
      <div className="flex flex-col sm:flex-row justify-between">
          <div className="text-center sm:w-9/12 m-3">
            <Typography variant='h4'>Who am I?</Typography>
            <Typography paragraph={true} fontSize={13} >
              My name is <Link target="_blank" rel="noopener" href="https://www.linkedin.com/in/ivan-penales/?originalSubdomain=ca"><b>Ivan Penales</b></Link> I am a developer currently working at <Link target="_blank" rel="noopener" href="https://www.haemonetics.com/">HAE</Link>. <br/>
              I graduated from <Link target="_blank" rel="noopener" href="https://www.ualberta.ca/index.html">U of A</Link> with a BSc in computer science under the honors program.<br/>
              I am working on a team that is maintaining and adding new features to <Link target="_blank" rel="noopener" href="https://plasma.haemonetics.com/software-solutions/nexlynk-dms">Nexlynk DMS</Link>.<br/>
              I write Java on a day to day basis, with frameworks such as spring and hibernate.<br/>
            </Typography>
            <Typography variant='h4'>How do I function in my team?</Typography>
              <Typography paragraph={true} fontSize={13}>
                  My team is focused on implementing user requested features and fixing existing bugs.<br/>
                  I work on both features and bugs.<br/>
                  I participate in design meetings. <br/>
                  I create design documents.<br/>
                  I work on our code infrastructure such us our build tools and our CICD pipelines.<br/>
                  I work on verifying security concerns raised by <Link target="_blank" rel="noopener" href="https://www.veracode.com/">Veracode</Link>.<br/>
                  I work on internal tooling.<br/>
              </Typography>
            <Typography variant='h4'>How would I describe myself?</Typography>
            <div className="flex justify-center">
              <Typography paragraph={true} fontSize={13} width={500}>
                I am someone who is accustomed to the challenges of creating "good" software. I know 
                how to work in a team. I have some experience on estimating my own ability. 
                I also have some experience on when to deny scope creep and when to accept it. I am also not just a developer whose focused on producing code,
                I am a developer whose focused on producing "good" software.
              </Typography>
            </div>
          </div>
          <div className="flex flex-col flex-grow">
            <Timeline>
              <TimelineItem>
                <TimelineOppositeContent>2021</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Interned at <Link target="_blank" rel="noopener" href="https://www.haemonetics.com/">HAE</Link></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>2022</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Part timed at <Link target="_blank" rel="noopener" href="https://www.haemonetics.com/">HAE</Link></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>2023</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="primary"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Graduated from <Link target="_blank" rel="noopener" href="https://www.ualberta.ca/index.html">U of A</Link> and started working full time at <Link target="_blank" rel="noopener" href="https://www.haemonetics.com/">HAE</Link></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent>2024/present</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary"/>
                  <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>Received a promotion and currently still working at <Link target="_blank" rel="noopener" href="https://www.haemonetics.com/">HAE</Link></TimelineContent>
              </TimelineItem>
            </Timeline>
            <div className="flex justify-center">
              <Typography className="">naviivan321@gmail.com</Typography>
            </div>
            <div className="flex flex-col justify-center m-3">
              <div className="text-center">
                <Typography variant="h6">Tech that i have worked with <b>(SCROLLABLE)</b></Typography>
                <List style={{maxHeight: 100,overflow:'auto'}} className='bg-lime-200'>
                  <div>Java (spring mvc,hibernate)</div>
                  <div>SQL(mysql,pl/sql,mariadb)</div>
                  <div>Cloud solutions (AWS,GCP,Digital Ocean)</div>
                  <div>Typescript</div>
                  <div>Javascript</div>
                  <div>React</div>
                  <div>NextJs</div>
                  <div>Bash</div>
                  <div>Go</div>
                  <div>Git</div>
                  <div>Python</div>
                  <div>Lua</div>
                  <div>C++</div>
                  <div>C</div>
                </List>
              </div>
              <div id="projects"className="flex justify-center m-5">
                <ButtonGroup orientation="vertical">
                  <Button href="#projects">Projects</Button>
                  <Button target="_blank" rel="noopener" href="https://github.com/navibryle">Github</Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
      </div>
      <Typography  className="text-center" variant="h3">Projects</Typography>
      <div className="flex flex-col">
        <Typography className="text-center" variant="h5"><Link target="_blank" rel="noopener" href="https://ipenales.com:3000">cs2 skin notifier</Link></Typography>
        <div className="text-center flex flex-row justify-between">
          <div className="ml-5">
            <Typography paragraph={true} maxWidth={500} className="text-center">
              <Typography variant="h5">Description</Typography>
              This is a tool that notifies users if a certain item in the steam market or bitskins market has dropped below or equal to the user specified price. The goal of this project is to eliminate the need to 
              periodically check the markets. It does this by polling the prices of the user specified items in the market. A small working POC of this project is currently live at <Link target="_blank" rel="noopener" href="https://ipenales.com:3000">here</Link>. I use this service myself.
              This is not some copy paste project, there is no service like this currently available right now.
            </Typography>
          </div>
          <div className="mr-5">
            <Typography paragraph={true} maxWidth={500} className="text-center">
              <Typography variant="h5">Tech</Typography>
               There are 3 components that i needed to achieve this:
               <List>
                <ListItem>
                   1.) A webapp that users can interact with so they can pick which skins they want to put on their watch list.
                </ListItem>
                <ListItem>
                   2.) A database to store all the watch listed items along with the users that are watching them.
                </ListItem>
                <ListItem>
                   3.) A backend that will constantly poll the database and the markets so that users will be notified if the item's price is equal to or under their requested price.
                </ListItem>
               </List>
              This was accomplished with NextJs,MariaDB, and go-lang respectively.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App
