import React from "react"
import LvlCircle from "./lvl-circle"
import KnoledgeBox from "./knoledge-box"
import { MdCode } from "react-icons/md"
import { GiSpeedometer } from "react-icons/gi";
import { FaCogs } from "react-icons/fa";
import { IoIosGitBranch } from "react-icons/io";
import { GiDatabase } from "react-icons/gi";
import { FiTerminal } from "react-icons/fi";
import { FiServer } from "react-icons/fi";



const KnowledgeSection = () => {
  const expert = '#ff8000'
  const advance = '#a335ee'
  const inter = '#0070dd'
  const novice = '#1eff00'
  const languageK = [
    {
      id: 1,
      color: advance,
      lvl: 'A',
      text: 'Javascript'
    },
    {
      id: 2,
      color: inter,
      lvl: 'I',
      text: 'Java & Python'
    },
    {
      id: 3,
      color: advance,
      lvl: 'A',
      text: 'HTML'
    },
    {
      id: 4,
      color: inter,
      lvl: 'I',
      text: 'CSS'
    }
  ]
  const frameworksK = [
    {
      id: 5,
      color: advance,
      lvl: 'A',
      text: 'React'
    },
    {
      id: 6,
      color: inter,
      lvl: 'I',
      text: 'Angular'
    },
    {
      id: 7,
      color: inter,
      lvl: 'I',
      text: 'Serverless'
    },
    {
      id: 8,
      color: inter,
      lvl: 'I',
      text: 'ReactNative'
    },
    {
      id: 9,
      color: inter,
      lvl: 'I',
      text: 'Express'
    },
    {
      id: 10,
      color: inter,
      lvl: 'I',
      text: 'Gatsby'
    }
  ]
  const ddbbK = [
    {
      id: 11,
      color: inter,
      lvl: 'I',
      text: 'DynamoDB'
    },
    {
      id: 12,
      color: inter,
      lvl: 'I',
      text: 'MongoDB'
    },
    {
      id: 13,
      color: inter,
      lvl: 'I',
      text: 'Postgress & MySql'
    }
  ]

  const devopsK = [
    {
      id: 14,
      color: inter,
      lvl: 'I',
      text: 'AWS'
    },
    {
      id: 15,
      color: inter,
      lvl: 'I',
      text: 'Netlify'
    },
    {
      id: 16,
      color: novice,
      lvl: 'N',
      text: 'GCP'
    }
  ]

  const os = [
    {
      id: 17,
      color: advance,
      lvl: 'A',
      text: 'MAC OS'
    },
    {
      id: 18,
      color: inter,
      lvl: 'I',
      text: 'Windows'
    }
  ]

  const controlVK = [
    {
      id: 19,
      color: inter,
      lvl: 'I',
      text: 'Git'
    },
    {
      id: 20,
      color: inter,
      lvl: 'I',
      text: 'Github'
    },
    {
      id: 21,
      color: inter,
      lvl: 'I',
      text: 'GitLab'
    }
  ]
  const otherSK = [
    {
      id: 22,
      color: advance,
      lvl: 'A',
      text: 'API GrapgQL & REST'
    },
    {
      id: 23,
      color: inter,
      lvl: 'I',
      text: 'AWS AppSync & ApiGateway'
    },
    {
      id: 24,
      color: inter,
      lvl: 'I',
      text: 'AWS S3'
    },
    {
      id: 25,
      color: inter,
      lvl: 'I',
      text: 'Content delivery'
    },
    {
      id: 26,
      color: inter,
      lvl: 'I',
      text: 'CI/CD'
    },
    {
      id: 27,
      color: expert,
      lvl: 'E',
      text: 'Leadership'
    },
    
  ]
  return (
    <section className="hero is-black">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">Knowledge</h1>
          <div className="columns is-centered" style={{ marginBottom: '35px'}}>
            <div className="column is-two-fifths">
              <div className="columns is-mobile is-multiline">
                <div className="column is-6-mobile is-offset-1-mobile is-content-centered is-vcentered">
                  <LvlCircle lvl="E" text="Expert" color={expert} />
                </div>
                <div className="column is-5-mobile is-content-centered is-vcentered">
                  <LvlCircle lvl="A" text="Advance" color={advance}/>
                </div>
                <div className="column is-6-mobile is-offset-1-mobile is-content-centered is-vcentered">
                  <LvlCircle lvl="I" text="Intermediate" color={inter} />
                </div>
                <div className="column is-5-mobile is-content-centered is-vcentered">
                  <LvlCircle lvl="N" text="Novice" color={novice} />
                </div>
              </div>
            </div>
          </div>

            <div className="column is-four-fifths" style={{margin: 'auto'}}>
              <div className="columns is-centered is-multiline">
                <div className="column is-5 is-offset-1">
                  <KnoledgeBox title='Languages' knoledge={languageK}>
                    <MdCode size={150} />
                  </KnoledgeBox>
                </div>
                <div className="column is-6">
                  <KnoledgeBox title='Frameworks' knoledge={frameworksK}>
                    <GiSpeedometer size={150} />
                  </KnoledgeBox>
                </div>
                <div className="column is-5">
                  <KnoledgeBox title='Databases' knoledge={ddbbK}>
                    <GiDatabase size={150} />
                  </KnoledgeBox>
                </div>
                <div className="column is-5">
                  <KnoledgeBox title='DevOps' knoledge={devopsK}>
                    <FiServer size={150} />
                  </KnoledgeBox>
                </div>
                <div className="column is-5" >
                  <KnoledgeBox title='OS' knoledge={os}>
                    <FiTerminal size={150} />
                  </KnoledgeBox>
                </div>
                <div className="column is-5">
                  <KnoledgeBox title='Control version' knoledge={controlVK}>
                    <IoIosGitBranch size={150} />
                  </KnoledgeBox>
                </div>
                <div className="column is-6">
                  <KnoledgeBox title='Other skills' knoledge={otherSK}>
                    <FaCogs size={150} />
                  </KnoledgeBox>
                </div>
              </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default KnowledgeSection
