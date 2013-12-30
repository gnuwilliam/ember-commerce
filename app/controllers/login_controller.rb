class LoginController < ApplicationController
  def create
    cpf_user = CpfUser.find_by e_mail: params[:e_mail]
    cnpj_user = CnpjUser.find_by e_mail: params[:e_mail]
    login_token = "MYAPPTOKEN"

    if cpf_user
      if cpf_user.password == params[:password]
        render json: {user: cpf_user, token: login_token}
      else
        render json: {error: "Invalid password"}
      end
    elsif cnpj_user
      if cnpj_user.password == params[:password]
        render json: {user: cnpj_user, token: login_token}
      else
        render json: {error: "Invalid password"}
      end
    else
      render json: {error: "User not found"}
    end
  end
end
