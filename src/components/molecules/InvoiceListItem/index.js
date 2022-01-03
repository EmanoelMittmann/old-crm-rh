import React, { useEffect } from 'react'

import { formatDate } from '../../utils/formatDate';
import { TeamMemberPic } from '../../atoms/TeamMemberPic/style';
import { InvoiceListItemContainer, InvoiceListItemProfile, InvoiceListItemSend, InvoiceListItemDeadline, InvoiceListItemNF } from './style';

const InvoiceListItem = ({invoice}) => {

    const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    const newDate = new Date(invoice.date_deadline)


    return (
        <InvoiceListItemContainer key={invoice.id}>
            <InvoiceListItemProfile>
                <TeamMemberPic
                src={invoice.user.avatar || "https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png"}
                margin="0 2.5em 0 0" 
                size="45px"
                />
                {invoice.name}
            </InvoiceListItemProfile>
            <InvoiceListItemSend>
                {formatDate(invoice.created_at)}
            </InvoiceListItemSend>
            <InvoiceListItemDeadline>
                {`Dia ${newDate.getDate().toString()} de ${months[newDate.getMonth()]}`}
            </InvoiceListItemDeadline>
            <InvoiceListItemNF>
                {invoice.file}
            </InvoiceListItemNF>
        </InvoiceListItemContainer>
    )
}

export default InvoiceListItem;