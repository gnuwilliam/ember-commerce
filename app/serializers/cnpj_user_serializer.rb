class CnpjUserSerializer < ActiveModel::Serializer
  attributes :id, :cnpj, :fantasy_name, :state_registration, :full_name, :phone, :e_mail, :address, :transporter, :password
end
