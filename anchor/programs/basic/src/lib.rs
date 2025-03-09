use anchor_lang::prelude::*;

declare_id!("7kvDTY8Pu4qEjvo3irD1ccebRvxoEHTc46xaAJck8dwB");

#[program]
pub mod basic {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("GM!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
