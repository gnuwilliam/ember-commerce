class CpfUsersController < ApplicationController
  def create
		sleep 1
		render json: CpfUser.create(cpf_user)
	end

	private
	def cpf_user
		params[:cpf_user].permit(:cpf, :full_name, :phone, :e_mail, :address, :password)
	end
end
