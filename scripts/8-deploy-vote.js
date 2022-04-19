import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      // Give your governance contract a name
      name: "sydfrens Governance",

      // This is the location of our governance token, our ERC-20 contract
      voting_token_address: "0xF816DFf1ACEbb49F13D1a9c497b74664633f7E10",

      // These parameters are specificed in number of blocks
      // Assuming block time of around 13.14 seconds (For Eth)
      
      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately 
      voting_delay_in_blocks: 0,

      // How long do members have to vote on a proposal when its created?
      // We will set it to 1 day = 6570 blocks
      voting_period_in_blocks: 6570,

      // The minimum % of the total supply that need to vote for
      // The proposal to be valid after the time for the proposal has ended
      voting_quorum_fraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed
      // to create a proposal.
      proposal_token_threshold: 0,
    });

    console.log(
      "✅ Successfully deployed vote contract, address:",
      voteContractAddress,
    );
  } catch (err) {
    console.error("Failed to deploy vote contract", err);
  }
})();