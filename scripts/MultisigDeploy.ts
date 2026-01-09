import { network } from "hardhat";

function requiredEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

function safeForNetwork(chainId: number): string {
  switch (chainId) {
    case 11155111: // Sepolia
      return requiredEnv("SEPOLIA_SAFE_ADDRESS");
    default:
      throw new Error(`No SAFE configured for chain ID: ${chainId}`);
  }
}

async function main() {
  const { viem } = await network.connect();
  const publicClient = await viem.getPublicClient();
  
  const chainId = publicClient.chain.id;
  const multisig = safeForNetwork(chainId);

  const [wallet] = await viem.getWalletClients();
  const deployer = wallet.account;
  
  console.log("Network:", publicClient.chain.name);
  console.log("ChainId:", chainId);
  console.log("Deploying from:", deployer.address);
  console.log("Multisig owner:", multisig);

  const contract = await viem.deployContract("MyContract", [multisig]);

  console.log("Deployed:", contract.address);
}

main().catch((e) => { console.error(e); process.exit(1); });
