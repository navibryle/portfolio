import './App.css'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Link, Typography } from '@mui/material'

function App() {

  return (
    <div className="flex flex-col">
        <div>
          <Typography className="" variant='h3'>Who am I?</Typography>
          <div>
                I am a developer currently working at <Link target="_blank" rel="noopener" href="https://www.haemonetics.com/">haemonetics</Link>. <br/>
                I am working on a team that is maintaining and adding new features to <Link target="_blank" rel="noopener" href="https://plasma.haemonetics.com/software-solutions/nexlynk-dms">Nexlynk DMS</Link>.<br/>
                I write Java on a day to day basis, with frameworks such as spring and hibernate.<br/>
          </div>
          <Typography variant='h3'>How do I function in my team?</Typography>
          <div>
              My team is focused on implementing user requested features and fixing existing bugs.<br/>
              I work on both features and bugs.<br/>
              I participate in design meetings with the intention of creating good software.<br/>
              I work on our code infrastructure such us our build tools and our CICD pipelines.<br/>
              I work on verifying security concerns raised by <Link target="_blank" rel="noopener" href="https://www.veracode.com/">Veracode</Link>.<br/>
              I work on internal tooling.<br/>
          </div>
          <Typography variant='h3'>How would I describe myself?</Typography>
          <div>
            <p>
              I am someone who is accustomed to the challenges of creating "good" software. I know 
              how to work in a team. I have some experience on estimating my own ability. 
              I also have some experience on when to deny scope creep and when to accept it. I am also not just a developer whose focused on producing code,
              I am a developer whose focused on producing "good" software, this means that I perform QA task such as 
              testing or providing documentation for existing features.
            </p>
          </div>
        </div>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent>XD</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary"/>
              <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>Hello</TimelineContent>
          </TimelineItem>
        </Timeline>
    </div>
  )
}

export default App
