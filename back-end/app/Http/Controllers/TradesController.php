<?php
/**
 * Created by PhpStorm.
 * User: thilani
 * Date: 12/18/20
 * Time: 1:32 PM
 */

namespace App\Http\Controllers;


use Illuminate\Http\JsonResponse;

class TradesController extends Controller
{
    public function index()
    {
        $response = [
            'open_trades' => [
                'in_progress_count' => 70,
                'closest_outcome' => '25m 34s'
            ],
            'training_wallet' => [
                'trading' => '$ 34, 536.00',
                'holding' => '$ 4, 345.00'
            ],
            'trades' => [
                [
                    'title' => 'ETH 48 hours',
                    'option' => 'Crypto',
                    'openTime' => null,
                    'outcomeTime' => '6h 48m',
                    'commitmentFund' => '$ 34, 346.00'
                ],
                [
                    'title' => 'ETH 48 hours',
                    'option' => 'Crypto',
                    'openTime' => null,
                    'outcomeTime' => '6h 48m',
                    'commitmentFund' => '$ 34, 346.00'
                ],
                [
                    'title' => 'ETH 48 hours',
                    'option' => 'Crypto',
                    'openTime' => null,
                    'outcomeTime' => '6h 48m',
                    'commitmentFund' => '$ 34, 346.00'
                ],
                [
                    'title' => 'ETH 48 hours',
                    'option' => 'Crypto',
                    'openTime' => null,
                    'outcomeTime' => '6h 48m',
                    'commitmentFund' => '$ 34, 346.00'
                ]
            ]
        ];

        return new JsonResponse($response, JsonResponse::HTTP_OK);
    }
}