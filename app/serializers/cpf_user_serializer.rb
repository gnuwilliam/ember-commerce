class CpfUserSerializer < ActiveModel::Serializer
  attributes :id, :cpf, :full_name, :phone, :e_mail, :address, :password
end
