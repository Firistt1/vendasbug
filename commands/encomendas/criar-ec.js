const { ApplicationCommandType, ButtonBuilder, ApplicationCommandOptionType, EmbedBuilder, ActionRowBuilder } = require("discord.js");
const {ownerid} = require("../../config.json");
const emoji = require("../../emoji.json");
const { dbc, perm} = require("../../database/index");

module.exports = {
    name:"ccr",
    description:"teste",
    type: ApplicationCommandType.ChatInput,

    run: async(client, interaction, args) => {
        const userid = interaction.user.id
        if(!await perm.get(`${userid}`)) return interaction.reply({content:`Você não tem permissão!`, ephemeral:true});
        
        await interaction.reply({
    content:`Aguarde.....`,
ephemeral: true})

await interaction.channel.send({
    embeds:[
        new EmbedBuilder()
            .setTitle(`${interaction.guild.name} | Enc`)
            .setDescription(`Cria`)
        
    ],
    components:[
        new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId(`enc`)
            .setLabel(`Criar encomend`)
            .setStyle(3)
            .setEmoji(emoji.buzina)

        )
    ]
})


}}