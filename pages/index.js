import ContributingFactorInfo from '../components/ContributingFactorInfo'
import ContributingFactors from '../components/ContributingFactors'
import Header from '../components/Header'
import RiskChart from '../components/RiskChart'
import TrainingAndPerformance from '../components/TrainingAndPerformance'

export default function Home() {
  return (
    <div className="background">
      <Header></Header>
      <RiskChart/>
      <TrainingAndPerformance/>
      <ContributingFactors/>
    </div>
  )
}
