import Notebook32 from "@carbon/icons-react/lib/notebook/32";
import HealthCross32 from "@carbon/icons-react/lib/health-cross/32";
import ContributingFactors from '../components/ContributingFactors'
import Header from '../components/Header'
import InfoBanner from '../components/InfoBanner'
import RedsVsOvertraining from '../components/RedsVsOvertraining'
import RiskChart from '../components/RiskChart'
import TrainingAndPerformance from '../components/TrainingAndPerformance'

const actionItemsInfo = {
  title: 'Reduce your Risk',
  subtitle: 'of developing REDS or overtraining.',
  buttonText: 'Action Items'
}

const samplePromo1 = {
  title: 'Optimize your Workouts',
  subtitle: 'With AI Endurance',
  buttonText: 'Learn More'
}

const samplePromo2 = {
  title: 'Improve Recovery with Regen-X',
  subtitle: 'Promo Code: ONEATHLETE',
  buttonText: 'Learn More'
}

const activeItem = actionItemsInfo

export default function Home() {
  return (
    <div className="background">
      <Header></Header>
      <RiskChart/>
      <InfoBanner
        title={activeItem.title}
        icon={{image:HealthCross32}}
        subtitle={activeItem.subtitle}
        button={{text: activeItem.buttonText, link: undefined}}
      />
      <RedsVsOvertraining/>
      <InfoBanner
        title={'Complete your Tests'}
        icon={{image:Notebook32}}
        subtitle={'to ensure your REDS and overtraining risk scores are up to date.'}
        button={{text: 'Tests', link: undefined}}
      />
      <TrainingAndPerformance/>
      <InfoBanner
        title={'Trends'}
        subtitle={'in the top contributing factors to your risk of overtraining and REDS can be found below.'}
        section={true}
      />
      <ContributingFactors/>
    </div>
  )
}
