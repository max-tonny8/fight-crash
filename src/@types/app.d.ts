interface AppContextType {
  isToggled: boolean;
  amount1: number;
  amount2: number;
  isApprove: boolean;
  totalBetAmount1: number;
  totalBetAmount2: number;
  chainBalance: number;
  totalPotAmount1: number;
  totalPotAmount2: number;
  setConnect: (state: boolean) => void;
  setAmount1: (state: number) => void;
  setAmount2: (state: number) => void;
  setToggled: (state: boolean) => void;
  handleApprove: (state: string) => void;
  handleBet: (state: string) => void;
}
interface HeaderBtnType {
  avatar?: React.ReactNode;
  title: string | boolean | undefined;
  icon?: React.ReactNode;
  onClick: () => void;
}

interface FightItemType {
  src: string;
  amount: number;
  gain: number;
  name: string;
  totalBetAmount: number;
  amount: number;
  setAmount: (state: number) => void;
  handleApprove: (state: string) => void;
  handleBet: (state: string) => void;
}
