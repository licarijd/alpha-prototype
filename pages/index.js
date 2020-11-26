import ContributingFactorInfo from '../components/ContributingFactorInfo'
import ContributingFactors from '../components/ContributingFactors'
import Header from '../components/Header'
import RiskChart from '../components/RiskChart'

export default function Home() {
  return (
    <div className="background">
      <Header></Header>
      <ContributingFactorInfo/>
      <RiskChart/>
      <ContributingFactors/>
    </div>
  )
}
