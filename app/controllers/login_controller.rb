class LoginController < ApplicationController
  def index
    cpf_user = CpfUser.find_by e_mail: params[:e_mail]
    cnpj_user = CnpjUser.find_by e_mail: params[:e_mail]

    if cpf_user
      if cpf_user.password == params[:password]
        render json: cpf_user
      else
        render json: {error: "Invalid password"}
      end
    elsif cnpj_user
      if cnpj_user.password == params[:password]
        render json: cnpj_user
      else
        render json: {error: "Invalid password"}
      end
    else
      render json: {error: "User not found"}
    end
  end
end
