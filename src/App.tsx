import './index.css'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Link, Typography } from '@mui/material'

function App() {

  return (
    <div className="flex flex-col sm:flex-row justify-between">
        <div className="text-center sm:w-9/12">
          <Typography variant='h4'>Who am I?</Typography>
          <Typography paragraph={true} fontSize={13}>
            My name is <b>Ivan Penales</b> I am a developer currently working at <Link target="_blank" rel="noopener" href="https://www.haemonetics.com/">Haemonetics</Link>. <br/>
            I graduated from <Link target="_blank" rel="noopener" href="https://www.ualberta.ca/index.html">U of A</Link> with a Bsc in computer science under the honors program.<br/>
            I am working on a team that is maintaining and adding new features to <Link target="_blank" rel="noopener" href="https://plasma.haemonetics.com/software-solutions/nexlynk-dms">Nexlynk DMS</Link>.<br/>
            I write Java on a day to day basis, with frameworks such as spring and hibernate.<br/>
          </Typography>
          <Typography variant='h4'>How do I function in my team?</Typography>
            <Typography paragraph={true} fontSize={13}>
                My team is focused on implementing user requested features and fixing existing bugs.<br/>
                I work on both features and bugs.<br/>
                I participate in design meetings and create design documents.<br/>
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
        <div className="flex-grow">
          <Timeline>
            <TimelineItem>
              <TimelineOppositeContent>May 2021</TimelineOppositeContent>
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
        </div>
    </div>
  )
}

export default App
