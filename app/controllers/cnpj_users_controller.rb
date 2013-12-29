class CnpjUsersController < ApplicationController
	def create
		sleep 1
		return json: CnpjUser.create(cnpj_user)
	end

	private
	def cnpj_user
		params[:cnpj_user].permit(:cnpj, :fantasy_name, :state_registration, :full_name, :phone, :e_mail, :address, :transporter, :password
	end
end
